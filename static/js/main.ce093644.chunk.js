(this.webpackJsonplocation_list=this.webpackJsonplocation_list||[]).push([[0],{188:function(e,a,t){e.exports=t(342)},193:function(e,a,t){},324:function(e,a,t){},325:function(e,a,t){},330:function(e,a,t){},337:function(e,a,t){},341:function(e,a,t){},342:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(29),r=t.n(c),o=t(104),s=t(178),l=t(35),m=t(10),u=t(42),d=t(155),A=t(348),p=t(64),h=t(344),g=t(349),f=t(350),E=t(351),b=t(352),N=t(353),v=t(354),y=t(355),k=t(356),O=(t(193),function(e){var a=[{title:function(){return n.a.createElement("div",{className:"header-container"},n.a.createElement("div",{className:"header-id"}),n.a.createElement("div",{className:"header-middle",onClick:function(){return e.sortTable("name")}},"Location Name",e.sorterObject&&e.sorterObject.hasOwnProperty("name")?e.sorterObject.name?n.a.createElement(g.a,{className:"pagination-arrow-icon"}):n.a.createElement(f.a,{className:"pagination-arrow-icon"}):null),n.a.createElement("div",{className:"header-middle",onClick:function(){return e.sortTable("address")}},"Address",e.sorterObject&&e.sorterObject.hasOwnProperty("address")?e.sorterObject.address?n.a.createElement(g.a,{className:"pagination-arrow-icon"}):n.a.createElement(f.a,{className:"pagination-arrow-icon"}):null),n.a.createElement("div",{className:"header-middle",onClick:function(){return e.sortTable("phoneNo")}},"Phone No.",e.sorterObject&&e.sorterObject.hasOwnProperty("phoneNo")?e.sorterObject.phoneNo?n.a.createElement(g.a,{className:"pagination-arrow-icon"}):n.a.createElement(f.a,{className:"pagination-arrow-icon"}):null),n.a.createElement("div",{className:"header-action"}))},dataIndex:"id",width:"98vw",key:"id",render:function(a,t){return n.a.createElement("div",{className:"body-container"},n.a.createElement("div",{className:"body-id"},n.a.createElement("div",{className:"container-id"},a)),n.a.createElement("div",{className:"body-middle"},t.name),n.a.createElement("div",{className:"body-middle"},"".concat(t.addressLine1," ").concat(t.addressLine2," ").concat(t.suiteNo," ").concat(t.city," ").concat(t.state.name||"")),n.a.createElement("div",{className:"body-middle"},t.phoneNumber),n.a.createElement("div",{className:"body-action"},n.a.createElement(E.a,{className:"edit-icon",onClick:function(){return e.editLocation(t)}}),n.a.createElement(b.a,{className:"delete-icon",onClick:function(){return e.deleteLocation(t.id)}})))}}];return n.a.createElement("div",{className:"location-table-container"},e.loading?n.a.createElement(d.a,{tip:"Loading...",className:"table-loading-spinner"},n.a.createElement(A.a,{message:"Location Loading...",className:"table-loading-alert",description:"We are loading your locations!",type:"info"})):0===e.dataSource.length?n.a.createElement(p.a,{image:n.a.createElement("div",{className:"no-location-image-container"},n.a.createElement("i",{class:"fa fa-map-marker no-location-image","aria-hidden":"true"})),description:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"no-location-title"},"There is no location added right now"),n.a.createElement("div",{className:"no-location-sub-title"},"Kindly Add Your Location First"))}):n.a.createElement(h.a,Object.assign({},e,{dataSource:e.dataSource,columns:a,footer:function(){return n.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#f0f2f3"}},n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"footer-inner-container"},n.a.createElement("div",{className:"page-number-dropdown-container"},"Items per page:",n.a.createElement("select",{defaultValue:e.recordsPerPage,className:"page-number-dropdown",onChange:function(a){return e.changeRecordsPerPage(parseInt(a.target.value))}},n.a.createElement("option",{value:10},"10"),n.a.createElement("option",{value:20},"20"),n.a.createElement("option",{value:30},"30"))),n.a.createElement("div",{className:"page-number-info-container"},e.currentPage," - ",e.totalPages," of ",e.totalPages),n.a.createElement("div",{className:"page-change-icon-container"},1!==e.currentPage?n.a.createElement(N.a,{className:"page-change-icon",onClick:function(){return e.startPage()}}):n.a.createElement("div",{className:"icon-empty-container"}),1!==e.currentPage?n.a.createElement(v.a,{className:"page-change-icon",onClick:function(){return e.previousPage()}}):n.a.createElement("div",{className:"icon-empty-container"}),e.currentPage!==e.totalPages?n.a.createElement(y.a,{className:"page-change-icon",onClick:function(){return e.nextPage()}}):n.a.createElement("div",{className:"icon-empty-container"}),e.currentPage!==e.totalPages?n.a.createElement(k.a,{className:"page-change-icon",onClick:function(){return e.lastPage()}}):n.a.createElement("div",{className:"icon-empty-container"})))))},pagination:!1})))}),P=t(40),C=(t(324),function(e){return n.a.createElement(P.a,e)}),j=t(122),T=t(96),M=t(186),S=t(346),L=t(347),w=t(31),I=t.n(w),_=[{code:"AK",name:"Alaska"},{code:"AL",name:"Alabama"},{code:"AP",name:"Armed Forces Pacific"},{code:"AR",name:"Arkansas"},{code:"AS",name:"American Samoa"},{code:"AZ",name:"Arizona"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DC",name:"District of Columbia"},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"FM",name:"Federated States of Micronesia"},{code:"GA",name:"Georgia"},{code:"GU",name:"Guam"},{code:"HI",name:"Hawaii"},{code:"IA",name:"Iowa"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"MA",name:"Massachusetts"},{code:"MD",name:"Maryland"},{code:"ME",name:"Maine"},{code:"MH",name:"Marshall Islands"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MO",name:"Missouri"},{code:"MP",name:"Northern Mariana Islands"},{code:"MS",name:"Mississippi"},{code:"MT",name:"Montana"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"NE",name:"Nebraska"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NV",name:"Nevada"},{code:"NY",name:"New York"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"PR",name:"Puerto Rico"},{code:"PW",name:"Palau"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VA",name:"Virginia"},{code:"VI",name:"Virgin Islands"},{code:"VT",name:"Vermont"},{code:"WA",name:"Washington"},{code:"WI",name:"Wisconsin"},{code:"WV",name:"West Virginia"},{code:"WY",name:"Wyoming"}],x=["Africa/Abidjan","Africa/Accra","Africa/Algiers","Africa/Bissau","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/El_Aaiun","Africa/Johannesburg","Africa/Juba","Africa/Khartoum","Africa/Lagos","Africa/Maputo","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Chicago","America/Chihuahua","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/UTC","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Helsinki","Europe/Istanbul","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Saratov","Europe/Simferopol","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","WET"],G=[{id:"mon",name:"Monday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1},{id:"tue",name:"Tuesday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1},{id:"wed",name:"Wednesday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1},{id:"thu",name:"Thursday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1},{id:"fri",name:"Friday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1},{id:"sat",name:"Saturday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1},{id:"sun",name:"Sunday",to:I()(),from:I()().subtract(2,"hours"),isChecked:!1}],B=function(e){if(!e)return e;var a=e.replace(/[^\d]/g,""),t=a.length;return t<4?a:t<7?"(".concat(a.slice(0,3),") ").concat(a.slice(3)):"(".concat(a.slice(0,3),") ").concat(a.slice(3,6),"-").concat(a.slice(6,10))},D=function(e){return""!==e},R=function(e){var a=!0;return(e.length<5||e.length>10)&&(a=!1),e.includes(" ")&&(a=!1),a},K=(t(325),T.a.Option),V=function(e){var a=Object(i.useState)({name:"",addressLine1:"",suiteNo:"",addressLine2:"",city:"",state:{code:null,name:null},zipCode:"",phoneNumber:"",phoneNumberValue:0,timeZone:"",facility:[],appointmentList:[]}),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(i.useState)(!0),s=Object(u.a)(o,2),l=s[0],d=s[1],A=Object(i.useState)(!0),p=Object(u.a)(A,2),h=p[0],g=p[1];Object(i.useEffect)((function(){Object.keys(e.currentLocation).length>0?r(Object(m.a)(Object(m.a)({},e.currentLocation),{},{phoneNumberValue:e.currentLocation.phoneNo&&""!==e.currentLocation.phoneNo?parseInt(e.currentLocation.phoneNo.replace(/[^0-9]/g,"")):0})):r({name:"",addressLine1:"",suiteNo:"",addressLine2:"",city:"",state:{code:null,name:null},zipCode:"",phoneNumber:"",phoneNumberValue:0,timeZone:"",facility:[],appointmentList:[]})}),[e.currentLocation]);var f=function(e){return Number.isInteger(e)?e:parseInt(e)?parseInt(e):parseInt(e.replace(/[^0-9]/g,""))};return n.a.createElement(S.a,Object.assign({},e,{title:n.a.createElement("div",{className:"add-location-title"},0===Object.keys(e.currentLocation).length?"Add Location":"Edit Location"),visible:e.visible,okText:0===Object.keys(e.currentLocation).length?"Save":"Edit",onOk:function(){0===Object.keys(e.currentLocation).length?(d(D(c.name)),g(R(c.zipCode)),D(c.name)&&R(c.zipCode)&&e.saveLocation(Object(m.a)(Object(m.a)({},c),{},{facility:e.facilityTiming}))):(d(D(c.name)),g(R(c.zipCode)),D(c.name)&&R(c.zipCode)&&e.updateLocation(Object(m.a)(Object(m.a)({},c),{},{facility:e.facilityTiming})))},onCancel:function(a){return e.closeModal()},width:800}),n.a.createElement("div",{style:{marginBottom:"25px"}},n.a.createElement("div",{className:"input-title-text"},"Location Name"),n.a.createElement(L.a,{value:c.name,placeholder:"Location Name",className:"input-text",onChange:function(e){d(D(Object(m.a)(Object(m.a)({},c),{},{name:e.target.value}))),r(Object(m.a)(Object(m.a)({},c),{},{name:e.target.value}))}}),l?null:n.a.createElement("div",{className:"required-error-text"},"** Required")),n.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},n.a.createElement("div",{className:"input-container-left"},n.a.createElement("div",{className:"input-title-text"},"Address Line 1"),n.a.createElement(L.a,{value:c.addressLine1,placeholder:"Address Line 1",className:"input-text",onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{addressLine1:e.target.value}))}})),n.a.createElement("div",{className:"input-container-right"},n.a.createElement("div",{className:"input-title-text"},"Suite No."),n.a.createElement(L.a,{value:c.suiteNo,placeholder:"Suite No.",className:"input-text",onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{suiteNo:e.target.value}))}}))),n.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},n.a.createElement("div",{className:"input-container-left"},n.a.createElement("div",{className:"input-title-text"},"Address Line 2"),n.a.createElement(L.a,{value:c.addressLine2,placeholder:"Address Line 2",className:"input-text",onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{addressLine2:e.target.value}))}})),n.a.createElement("div",{style:{width:"50%",display:"flex"}},n.a.createElement("div",{className:"input-container-left"},n.a.createElement("div",{className:"input-title-text"},"City"),n.a.createElement(L.a,{value:c.city,placeholder:"City",className:"input-text",onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{city:e.target.value}))}})),n.a.createElement("div",{className:"input-container-right"},n.a.createElement("div",{className:"input-title-text"},"State"),n.a.createElement(T.a,{value:c.state.name,placeholder:"State",bordered:!1,showArrow:!1,className:"input-select",onChange:function(e){r(Object(m.a)(Object(m.a)({},c),{},{state:_.find((function(a){return a.code===e}))}))}},_.map((function(e){return n.a.createElement(K,{key:e.code},e.name)})))))),n.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},n.a.createElement("div",{style:{display:"flex",width:"50%",marginRight:"10px"}},n.a.createElement("div",{className:"input-container-left"},n.a.createElement("div",{className:"input-title-text"},"Zip Code"),n.a.createElement(L.a,{value:c.zipCode,placeholder:"Zip Code",className:"input-text",onChange:function(e){g(R(e.target.value)),r(Object(m.a)(Object(m.a)({},c),{},{zipCode:e.target.value}))}}),h?null:n.a.createElement("div",{className:"required-error-text"},"** Must have 5 to 10 character"),h?null:n.a.createElement("div",{className:"required-error-text"},"** No spaces allowed")),n.a.createElement("div",{className:"input-container-right"},n.a.createElement("div",{className:"input-title-text"},"Phone Number"),n.a.createElement(L.a,{value:c.phoneNumber,placeholder:"Phone Number",className:"input-text",onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{phoneNumberValue:f(e.target.value),phoneNumber:e.target.value}))},onPressEnter:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{phoneNumberValue:f(e.target.value),phoneNumber:B(e.target.value)}))},onBlur:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{phoneNumberValue:f(e.target.value),phoneNumber:B(e.target.value)}))}}))),n.a.createElement("div",{className:"input-container-right"},n.a.createElement("div",{className:"input-title-text"},"Time Zone"),n.a.createElement(T.a,{value:c.timeZone,placeholder:"Time Zone",bordered:!1,showArrow:!1,className:"input-select",onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{timeZone:x[e]}))}},x.map((function(e,a){return n.a.createElement(K,{key:a},e)}))))),n.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},n.a.createElement("div",{className:"input-container-left"},n.a.createElement(P.a,{className:"facility-button",type:"text",onClick:e.handleFacility},"Set Facility")),n.a.createElement("div",{className:"input-container-right"},n.a.createElement("div",{className:"input-title-text"},"Appointment Pool"),n.a.createElement(T.a,{mode:"multiple",bordered:!1,showArrow:!1,className:"input-select",dropdownStyle:{display:"none"},value:c.appointmentList,tagRender:function(e){var a=e.label,t=e.value,i=e.closable,c=e.onClose;return n.a.createElement(M.a,{className:"tag-element",color:t,closable:i,onClose:c,style:{marginRight:3}},a)},onChange:function(e){return r(Object(m.a)(Object(m.a)({},c),{},{appointmentList:Object(j.a)(e.filter((function(e){return 0!==e.trim().length})))}))},onInputKeyDown:function(e){"Enter"===e.key&&(r(Object(m.a)(Object(m.a)({},c),{},{appointmentList:[].concat(Object(j.a)(c.appointmentList),Object(j.a)(e.target.value.split(",").filter((function(e){return 0!==e.trim().length}))))})),e.target.blur())}}))))},F=t(97),q=t(345);t(330);function H(e){return n.a.createElement(S.a,Object.assign({},e,{title:n.a.createElement("div",{className:"facility-timing-title"},"Facility Times"),visible:e.visible,okText:"Save",onOk:function(){e.saveLocationTiming()},onCancel:function(a){return e.closeModal()},width:800}),n.a.createElement("div",{className:"modal-header"},n.a.createElement("div",{className:"grid-cell-day"}),n.a.createElement("div",{className:"grid-cell-from"},"From"),n.a.createElement("div",{className:"grid-cell-to"},"To"),n.a.createElement("div",{className:"grid-cell-button"})),Array.isArray(e.facilityTiming)&&e.facilityTiming.map((function(a){return n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"grid-cell-day"},n.a.createElement(F.a,{checked:a.isChecked,onChange:function(){e.setFacilityTiming(e.facilityTiming.map((function(e){return e.id===a.id&&(e.isChecked=!e.isChecked),e})))}},a.name)),n.a.createElement("div",{className:"grid-cell-to"},n.a.createElement(q.a,{value:a.from,allowClear:!1,format:"HH:mm A",onChange:function(t){e.setFacilityTiming(e.facilityTiming.map((function(e){return e.id===a.id&&(e.from=t),e})))}})),n.a.createElement("div",{className:"grid-cell-from"},n.a.createElement(q.a,{value:a.to,allowClear:!1,format:"HH:mm A",onChange:function(t){e.setFacilityTiming(e.facilityTiming.map((function(e){return e.id===a.id&&(e.to=t),e})))}})),n.a.createElement("div",{className:"grid-cell-button"},n.a.createElement(P.a,{className:"apply-to-all-checked-button",onClick:function(){e.setFacilityTiming(e.facilityTiming.map((function(e){return e.isChecked&&(e=Object(m.a)(Object(m.a)({},e),{},{to:a.to,from:a.from})),e})))}},"Apply To All Checked")))})))}t(337);function z(e){var a=Object(o.useIndexedDB)("location"),t=a.getAll,c=a.add,r=a.update,s=a.deleteRecord,l=Object(i.useState)(!1),d=Object(u.a)(l,2),A=d[0],p=d[1],h=Object(i.useState)([]),g=Object(u.a)(h,2),f=g[0],E=g[1],b=Object(i.useState)([]),N=Object(u.a)(b,2),v=N[0],y=N[1],k=Object(i.useState)(G),P=Object(u.a)(k,2),j=P[0],T=P[1],M=Object(i.useState)({}),S=Object(u.a)(M,2),L=S[0],w=S[1],_=Object(i.useState)(!1),x=Object(u.a)(_,2),B=x[0],D=x[1],R=Object(i.useState)(!1),K=Object(u.a)(R,2),F=K[0],q=K[1],z=Object(i.useState)(10),W=Object(u.a)(z,2),J=W[0],U=W[1],Z=Object(i.useState)(1),Y=Object(u.a)(Z,2),Q=Y[0],X=Y[1],$=Object(i.useState)(1),ee=Object(u.a)($,2),ae=ee[0],te=ee[1],ie=Object(i.useState)({}),ne=Object(u.a)(ie,2),ce=ne[0],re=ne[1],oe=function(){p(!0),t().then((function(e){var a=e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{facility:JSON.parse(e.facility).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{to:I()(e.to),from:I()(e.from)})}))})}));p(!1),E(a),y(a.slice(10*(Q-1),10*Q)),te(Math.ceil(e.length/J))}))},se=function(e){switch(e){case"startPage":y(f.slice(0,J)),X(1);break;case"previousPage":Q>1&&(y(f.slice(J*(Q-2),J*(Q-1))),X(Q-1));break;case"nextPage":Q<ae&&(y(f.slice(J*Q,J*(Q+1))),X(Q+1));break;case"lastPage":y(f.slice(J*(ae-1),J*ae)),X(ae)}};return Object(i.useEffect)(oe,[]),n.a.createElement("div",{className:"page-container"},n.a.createElement("div",{className:"page-header"},n.a.createElement("div",{className:"header-left"},"Location"),n.a.createElement("div",{className:"header-right"},n.a.createElement(C,{className:"add-location-button",onClick:function(){w({}),T(G.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{to:I()(),from:I()().subtract(2,"hours"),isChecked:!1})}))),D(!0)}},"+ Add Location"))),n.a.createElement("div",{className:"page-table"},n.a.createElement(O,{dataSource:v,loading:A,currentPage:Q,totalPages:ae,recordsPerPage:J,sorterObject:ce,changeRecordsPerPage:function(e){U(e),X(1),y(f.slice(0,e)),te(Math.ceil(f.length/e))},editLocation:function(e){T(e.facility),w(e),D(!0)},deleteLocation:function(e){s(e).then((function(){return oe()}))},startPage:function(){return se("startPage")},previousPage:function(){return se("previousPage")},nextPage:function(){return se("nextPage")},lastPage:function(){return se("lastPage")},sortTable:function(e){switch(e){case"name":var a=!ce.hasOwnProperty("name")||!ce.name;f.sort((function(e,t){var i=e.name.toUpperCase(),n=t.name.toUpperCase();return i<n?a?-1:1:i>n?a?1:-1:0})),y(f.slice(J*(Q-1),J*Q)),re({name:a});break;case"address":var t=!ce.hasOwnProperty("address")||!ce.address;f.sort((function(e,a){var i=e.addressLine1?e.addressLine1.toUpperCase():"",n=a.addressLine1?a.addressLine1.toUpperCase():"";return i<n?t?-1:1:i>n?t?1:-1:0})),y(f.slice(J*(Q-1),J*Q)),re({address:t});break;case"phoneNo":var i=!ce.hasOwnProperty("phoneNo")||!ce.phoneNo;f.sort((function(e,a){var t=e.phoneNumberValue,n=a.phoneNumberValue;return t<n?i?-1:1:t>n?i?1:-1:0})),y(f.slice(J*(Q-1),J*Q)),re({phoneNo:i})}}})),n.a.createElement(V,{currentLocation:L,facilityTiming:j,visible:B,saveLocation:function(e){e.facility=JSON.stringify(e.facility);var a=f.length>0?parseInt(f[f.length-1].id)+1:1;c(Object(m.a)(Object(m.a)({},e),{},{id:a})).then((function(){oe(),D(!1),w({}),T(G)}))},updateLocation:function(e){e.facility=JSON.stringify(e.facility),w({}),r(Object(m.a)({},e)).then((function(){oe(),D(!1),w({}),T(G)}))},handleFacility:function(){return D(!1),void q(!0)},closeModal:function(){w({}),T(G),D(!1)}}),n.a.createElement(H,{facilityTiming:j,visible:F,setFacilityTiming:T,saveLocationTiming:function(){D(!0),q(!1)},closeModal:function(){D(!0),q(!1),T(G)}}))}function W(){return n.a.createElement(s.a,null,n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/"},n.a.createElement(z,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(341);Object(o.initDB)({name:"LocationDB",version:1,objectStoresMeta:[{store:"location",storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"name",keypath:"name",options:{unique:!1}},{name:"addressLine1",keypath:"addressLine1",options:{unique:!1}},{name:"addressLine2",keypath:"addressLine2",options:{unique:!1}},{name:"suiteNo",keypath:"suiteNo",options:{unique:!1}},{name:"city",keypath:"city",options:{unique:!1}},{name:"state",keypath:"state",options:{unique:!1}},{name:"zipCode",keypath:"zipCode",options:{unique:!1}},{name:"phoneNumber",keypath:"phoneNumber",options:{unique:!1}},{name:"timeZone",keypath:"timeZone",options:{unique:!1}},{name:"facility",keypath:"facility",options:{unique:!1}},{name:"appointmentList",keypath:"appointmentList",options:{unique:!1}}]}]}),r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.ce093644.chunk.js.map