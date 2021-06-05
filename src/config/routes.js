const routes = [{
    path: "/",
    label: "Home",
    component: "Dashboard",
    icon: "icon-dashboard"

},
{
    path: "/profile",
    label: "Profle",
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