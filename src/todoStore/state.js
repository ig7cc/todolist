export default {
    list:JSON.parse(localStorage.getItem("list")) || [
        {show:true,status:true,msg:"coding 选项卡"},
        {show:true,status:false,msg:"coding todolist"},
        {show:true,status:false,msg:"coding schedule"}
    ],
    sel:"all"
}