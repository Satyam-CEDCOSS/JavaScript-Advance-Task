var Data = [
  {
    id: "187449130",
    name: "GoodMarket Meetings",
    orderindex: 0,
    content: "Object 1",
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "205202714",
    name: "Goodmarket User Stories",
    orderindex: 1,
    content:
      "User Story Definition: an informal, natural language description of features of a software system written from the perspective of an end user.\nEnd users in GoodMarket: Buyer/Vendor/Network/Admin\nNot an end user: client/developer/tester/designer/manager\nUser Stories Reference\nRequirement Overview: The target is to complete as much as possible within 3 months (mid June to mid September 2022) so that B2C products with payments and gift cards are available for the 2022 holiday season.",
      status: {
        status: "active",
        color: "#9b59b6",
      },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "199459277",
    name: "GoodMarket Backlog",
    orderindex: 2,
    status: {
      status: "active",
      color: "#9b59b6",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: false,
    permission_level: "create",
  },
  {
    id: "199314590",
    name: "GoodMarket Magento Integration Issues",
    orderindex: 3,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "199273807",
    name: "GoodMarket Shopify Integration Issues",
    orderindex: 4,
    status: {
      status: "active",
      color: "#9b59b6",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "199254937",
    name: "GoodMarket Designing",
    orderindex: 5,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: false,
    permission_level: "create",
  },
  {
    id: "193278611",
    name: "GoodMarket Development",
    orderindex: 6,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create", 
  },
  {
    id: "193352341",
    name: "GoodMarket Website Testing",
    orderindex: 7,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
];
let body = document.getElementById("tbdy");
function display() {
  let txt = "";
  for (let i = 0; i< Data.length; i++){
    txt+="<tr><td>"+Data[i].id+"</td><td>"+Data[i].name+"</td><td>"+Data[i].orderindex+"</td><td style='background-color:"+Data[i].status.color+"';></td></tr>";
  }
  body.innerHTML = txt;
}
display();
var flag = 0
function del() {
  if (flag==0){
    flag=1
    body.deleteRow(1)
  }
}
function upt() {
  Data[7].name = "Hello World!"
  display()
}
