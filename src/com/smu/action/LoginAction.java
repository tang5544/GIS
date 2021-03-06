package com.smu.action;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.smu.entity.User;
import com.smu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletResponse;

/**
 * @author LeagueRT
 * @create 2019/1/23-12:00
 */
public class LoginAction implements Action {

    //定义一个常量作为管理员登陆成功的Result名
    private final String SUPERADMIN = "superadmin";
    //定义一个常量作为超级管理员登陆成功的Result名
    private final String ADMIN = "admin";

    //定义用户操作使用Spring的自动配装策略
    @Autowired
    private UserService userService;

    private String username;
    private String password;
    private String usertel;
    private String useremail;
    private String userrmark;
    private String userinfo;
    private String passwordadm;
    private String oderuserpwd;
    private String muserpwd;
    private String picFileName;
    private String pic;
    private HttpServletResponse response;

    @Override
    public String execute() throws Exception {
        ActionContext ctx = ActionContext.getContext();
        Integer counter = (Integer) ctx.getApplication().get("counter");
        if(counter == null) counter = 1;
        else counter = counter + 1;
        ctx.getApplication().put("counter", counter);
        System.out.println(getUsername());
        User user = userService.checkLogin(username, password);
        if (user != null){
            ctx.put("tip", "服务器提示：您已经成功登陆");
            ctx.getSession().put("user", getUsername());
            ctx.getSession().put("rmark", user.getUserrmark());
            ctx.getSession().put("image", user.getUserimg());
            if (user.getPasswordadm().equals("超级管理员")) {
                ctx.getSession().put("mark",1);
                return SUPERADMIN;
            }
            else if (user.getPasswordadm().equals("管理员")) {
                ctx.getSession().put("mark",2);
                return ADMIN;
            }
            else {
                ctx.getSession().put("mark",3);
                return SUCCESS;
            }
        }
        ctx.put("tip", "服务器提示：登陆失败，请重新登陆");
        return ERROR;
    }

    public String Register() throws Exception {
        String a="";
        if (passwordadm.equals("13579")) a="管理员";
        else if (passwordadm.equals("13578999")) a="超级管理员";
        else a="游客";
        if (userService.register(username, password, usertel, useremail, userrmark, userinfo, a)){
            ActionContext ctx = ActionContext.getContext();
            ctx.getSession().put("rmark",getUserrmark());
            System.out.println(getUserrmark());
            return SUCCESS;
        }
        return ERROR;
    }

    public String toModify() throws Exception{
        return SUCCESS;
    }

    public String Modify() throws Exception {
        ActionContext ctx = ActionContext.getContext();
        String userNameModify = ctx.getSession().get("user").toString();
        if (userService.modify(userNameModify,oderuserpwd,muserpwd)) return SUCCESS;
        return ERROR;
    }

    public String ModifyInfo() throws Exception{
        User user = null;
        ActionContext ctx = ActionContext.getContext();
        String name= ctx.getSession().get("user").toString();
        String mark= ctx.getSession().get("rmark").toString();
        if (userrmark != null || usertel != null || userinfo !=null) {
            user = userService.modify(name,mark,userrmark,usertel,userinfo);
        }
        if (user != null){
            if (user.getPasswordadm().equals("超级管理员")) return SUPERADMIN;
            else if (user.getPasswordadm().equals("管理员")) return ADMIN;
            else return SUCCESS;
        }
        return ERROR;
    }

    public String toUserInfo() throws Exception {
        ActionContext ctx = ActionContext.getContext();
        String infoName= ctx.getSession().get("user").toString();
        String infoMark= ctx.getSession().get("rmark").toString();
        User user = userService.getUserInfo(infoName,infoMark);
        ctx.getSession().put("user", user.getUsername());
        ctx.getSession().put("rmark", user.getUserrmark());
        ctx.getSession().put("image", user.getUserimg());
        return SUCCESS;
    }


    public String Exit() throws Exception {
        ActionContext ctx = ActionContext.getContext();
        ctx.getSession().put("rmark",null);
        ctx.getSession().put("user",null);
        ctx.getSession().put("adm",null);
        ctx.getSession().put("image",null);
        return SUCCESS;
    }

    public String Back() throws Exception{
        return SUCCESS;
    }

    public  String GotoLogin() throws Exception{
        return SUCCESS;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsertel() {
        return usertel;
    }

    public void setUsertel(String usertel) {
        this.usertel = usertel;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUserrmark() {
        return userrmark;
    }

    public void setUserrmark(String userrmark) {
        this.userrmark = userrmark;
    }

    public String getUserinfo() {
        return userinfo;
    }

    public void setUserinfo(String userinfo) {
        this.userinfo = userinfo;
    }

    public String getPasswordadm() {
        return passwordadm;
    }

    public void setPasswordadm(String passwordadm) {
        this.passwordadm = passwordadm;
    }

    public String getOderuserpwd() {
        return oderuserpwd;
    }

    public void setOderuserpwd(String oderuserpwd) {
        this.oderuserpwd = oderuserpwd;
    }

    public String getMuserpwd() {
        return muserpwd;
    }

    public void setMuserpwd(String muserpwd) {
        this.muserpwd = muserpwd;
    }

    public String getPicFileName() {
        return picFileName;
    }

    public void setPicFileName(String picFileName) {
        this.picFileName = picFileName;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }
}
