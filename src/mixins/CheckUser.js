/**
 * @desc 检测用户的登录状态
 * @author Jafeney
 * @dateTime 2016-07-25
 **/

export default {
    isLogged: (user) => {
        return user.getIn(['info', 'token'])
            && (((parseInt((new Date).getTime()/1000))
                - user.getIn(['info', 'token']).split('|')[2]
                    .split(':')[1]) < 86400)
    }
}
