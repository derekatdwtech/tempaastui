const routes = [{
    path: "/",
    label: "Home",
    component: "Dashboard",
    icon: "icon-dashboard"

},
{
    path: "/profile",
    label: "Profile",
    component: "Profile",
    icon: "icon-user"
},
{
    path:"/devices",
    label: "Devices",
    component: "Devices",
    icon: "icon-computer"
},
{
    path:"/alerts",
    label: "Alerts",
    component: "Alerts",
    icon: "fa fa-bell-o"
},
{
    path: "https://github.com/derekatdwtech/tempaastui/issues",
    label: "Support",
    component: "",
    icon: "fa fa-question"
},
{
    path:"/donate",
    label: "Donate",
    component: "Donate",
    icon: "icon-bill"
}]

export default routes;