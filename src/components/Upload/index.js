/**
 * @type FormControls Component
 * @desc 图片上传
 * @author Jafeney
 * @dateTime 2016-08-06
 **/

import React, { Component } from 'react'
import './style.less'

class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uploadHistory: [],
            uri: props.uri || '/',
            size: props.size || 20,
            files: props.files || [],
            multiple: props.multiple || false,
            progress: [], //默认一次最多上传20张
        }
    }

    // 取消拖拽时鼠标经过样式
    handleDragHover(e) {
        e.stopPropagation();
		e.preventDefault();
    }

    //文件拖放处理
    handleDrop(e) {
        this.setState({progress:[]})
        this.handleDragHover(e);
        // 获取文件列表对象
		let files = e.target.files || e.dataTransfer.files;
        let count = this.state.multiple ? files.length : 1
        for (let i = 0; i < count; i++) {
            files[i].thumb = URL.createObjectURL(files[i])
        }
        // convert to array
        files = Array.prototype.slice.call(files, 0)
        files = files.filter(function (file) {
            return /image/i.test(file.type)
        })
        this.setState({files: this.state.files.concat(files)})
    }

    handleChange(event) {
        this.setState({progress:[]})
        event.preventDefault()
        let target = event.target
        let files = target.files
        let count = this.state.multiple ? files.length : 1
        for (let i = 0; i < count; i++) {
            files[i].thumb = URL.createObjectURL(files[i])
        }
        // convert to array
        files = Array.prototype.slice.call(files, 0)
        files = files.filter(function (file) {
            return /image/i.test(file.type)
        })
        this.setState({files: this.state.files.concat(files)})
    }

    handleSuccess(file, res) {
        this.setState({uploadHistory: [...this.state.uploadHistory, JSON.parse(res)]})
    }

    handleDeleteFile(fileDelete) {
        let arrFile = [];
        for (let i = 0, file; file = this.state.files[i]; i++) {
            if (file != fileDelete) {
                arrFile.push(file);
            } else {
                // this.onDelete(fileDelete);
            }
        }
        this.setState({files: arrFile})
    }

    handleProgress(file, loaded, total, idx) {
        let percent = (loaded / total * 100).toFixed(2) + '%';
        let _progress = this.state.progress;
        _progress[idx] = percent;
        console.log(_progress);
        this.setState({ progress: _progress })
    }

    handleComplete() {
        console.log('upload complete！');
    }

    handleFailure(file, res) {
        console.log(res);
    }

    handleUpload() {
        for (let i = 0, file; file = this.state.files[i]; i++) {
            ((file) => {
                let xhr = new XMLHttpRequest();
                if (xhr.upload) {
                    // 上传中
                    console.log('上传中')
                    xhr.upload.addEventListener("progress", (e) => {
                        this.handleProgress(file, e.loaded, e.total, i);
                    }, false);

                    // 文件上传成功或是失败
                    xhr.onreadystatechange = (e) => {
                        if (xhr.readyState == 4) {
                            if (xhr.status == 200) {
                                this.handleSuccess(file, xhr.responseText);
                                console.log('一个任务上传成功！')

                                this.handleDeleteFile(file);
                                console.log('该文件已从上传队列中删除');

                                if (!this.state.files.length) {
                                    //全部完毕
                                    this.handleComplete();
                                    console.log('全部上传完成！');
                                }
                            } else {
                                this.handleFailure(file, xhr.responseText);
                                console.log('上传出错！');
                            }
                        }
                    }

                    // 开始上传
                    xhr.open("POST", this.state.uri, true);
                    xhr.setRequestHeader("X_FILENAME", file.name);
                    // xhr.send(file);
                    var form = new FormData();
                    form.append("filedata", file);
                    console.log(form);
                    xhr.send(form);
                }
            })(file)
        }
    }

    _renderPreview() {
        if (this.state.files) {
            return this.state.files.map((item, idx) => {
                return (
                    <div className="upload-append-list">
                        <p>
                            <strong>{item.name}</strong>
                            <a href="javascript:void(0)"
                                className="upload-delete"
                                title="删除" index={idx}></a>
                            <br/>
                            <img src={item.thumb} className="upload-image" />
                        </p>
                        <span className={this.state.progress[idx]?
                            "upload-progress":
                            "upload-progress ry-hidden"}>
                            {this.state.progress[idx]}
                        </span>
                    </div>
                )
            })
        } else {
            return null;
        }
    }

    _renderUploadInfos() {
        if (this.state.uploadHistory) {
            return this.state.uploadHistory.map((item, idx) => {
                return (
                    <p>
                        <span>上传成功，图片地址是：</span>
                        <input type="text" class="upload-url" value={item.relPath}/>
                        <a href={item.relPath} target="_blank">查看</a>
                    </p>
                );
            })
        } else {
            return null;
        }
    }

    render() {
        return (
            <form action={this.state.uri} method="post" encType="multipart/form-data">
                <div className="ry-upload-box">
                    <div className="upload-main">
                        <div className="upload-choose">
                            <input
                                onChange={(v)=>this.handleChange(v)}
                                type="file"
                                size={this.state.size}
                                name="fileSelect"
                                accept="image/*"
                                multiple={this.state.multiple} />
                            <span ref="dragBox"
                                onDragOver={(e)=>this.handleDragHover(e)}
                                onDragLeave={(e)=>this.handleDragHover(e)}
                                onDrop={(e)=>this.handleDrop(e)}
                                className="upload-drag-area">
                                或者将图片拖到此处
                            </span>
                        </div>
                        <div className={this.state.files.length?
                                "upload-preview":"upload-preview ry-hidden"}>
                            {this._renderPreview()}
                        </div>
                    </div>
                    <div className={this.state.files.length?
                            "upload-submit":"upload-submit ry-hidden"}>
                        <button type="button"
                            onClick={()=>this.handleUpload()}
                            class="upload-submit-btn">确认上传图片</button>
                    </div>
                    <div className="upload-info">{this._renderUploadInfos()}</div>
                </div>
            </form>
        )
    }
}

export default Upload
