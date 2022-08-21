!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkfirestarter=self.webpackChunkfirestarter||[]).push([[318],{318:function(e,i,r){"use strict";r.r(i),r.d(i,{CustomersModule:function(){return w}});var o=r(1116),s=r(6433),a=r(5366),c=r(9624),u=function(){var e=function(){function e(n,i,r){t(this,e),this.title=n,this.meta=i,this.router=r}return n(e,[{key:"generateTags",value:function(t){var e=t.title,n=void 0===e?"":e,i=t.description,r=void 0===i?"":i,o=t.image,s=void 0===o?"":o;this.title.setTitle(n),this.meta.addTags([{name:"og:url",content:"https://firestarter.fireship.io".concat(this.router.url)},{name:"og:title",content:n},{name:"og:description",content:r},{name:"og:image",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@fireship_dev"}])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(c.Dx),a.LFG(c.h_),a.LFG(s.F0))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),m=r(8115),l=r(878),d=function(){var e=function(){function e(n){t(this,e),this.db=n,this.customers=null}return n(e,[{key:"subscribeToCustomers",value:function(){var t=this;this.customers||(this.subscription=this.db.collection("customers").valueChanges({idField:"id"}).subscribe(function(e){t.customers=e}))}},{key:"getCustomer",value:function(t){if(this.customers){var e=this.customers.find(function(e){return e.id===t});return console.log("use cached"),(0,l.of)(e)}return console.log("use db"),this.db.collection("customers").doc(t).valueChanges()}},{key:"dispose",value:function(){this.subscription.unsubscribe(),this.customers=null}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(m.ST))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),f=r(667),g=r(4670);function h(t,e){if(1&t&&(a.TgZ(0,"mat-list-item",3),a.TgZ(1,"mat-icon",4),a._uU(2,"account_box"),a.qZA(),a.TgZ(3,"h3"),a._uU(4),a.qZA(),a.qZA()),2&t){var n=e.$implicit;a.Q6J("routerLink",n.id),a.xp6(4),a.Oqu(n.name)}}var p=function(){var e=function(){function e(n,i,r){t(this,e),this.seo=n,this.db=i,this.data=r}return n(e,[{key:"ngOnInit",value:function(){this.seo.generateTags({title:"Customer List",description:"A list filled with customers"}),this.data.subscribeToCustomers()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Y36(u),a.Y36(m.ST),a.Y36(d))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-list-page"]],decls:6,vars:1,consts:[["role","list"],["mat-subheader",""],["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],["role","listitem",3,"routerLink"],["mat-list-icon",""]],template:function(t,e){1&t&&(a.TgZ(0,"h1"),a._uU(1,"List Page"),a.qZA(),a.TgZ(2,"mat-nav-list",0),a.TgZ(3,"h3",1),a._uU(4,"Customers (Fake Data)"),a.qZA(),a.YNc(5,h,5,2,"mat-list-item",2),a.qZA()),2&t&&(a.xp6(5),a.Q6J("ngForOf",e.data.customers))},directives:[f.Hk,f.gs,o.sg,f.Tg,s.rH,g.Hw,f.Nh],styles:["[_nghost-%COMP%]{text-align:center;padding:24px}mat-nav-list[_ngcontent-%COMP%]{max-width:600px;background-color:#212121;padding:0;margin:0 auto}mat-list-item[_ngcontent-%COMP%]{transition:transform .3s ease}mat-list-item[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}"]}),e}(),v=r(4019),Z=r(2797),b=r(4369);function T(t,e){if(1&t&&(a.TgZ(0,"mat-card"),a.TgZ(1,"mat-card-header"),a.TgZ(2,"mat-card-title"),a._uU(3),a.qZA(),a.TgZ(4,"mat-card-subtitle"),a._uU(5,"Customer Details"),a.qZA(),a.qZA(),a._UZ(6,"img",3),a.TgZ(7,"mat-card-content"),a.TgZ(8,"p"),a._uU(9),a.qZA(),a.qZA(),a.qZA()),2&t){var n=e.ngIf;a.xp6(3),a.Oqu(n.name),a.xp6(3),a.Q6J("src",n.image,a.LSH),a.xp6(3),a.hij(" ",n.bio," ")}}var k,A,C=[{path:"",component:p},{path:":id",component:(k=function(){function e(n,i,r,o){t(this,e),this.route=n,this.db=i,this.seo=r,this.data=o}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.customerId=this.route.snapshot.paramMap.get("id"),this.customer=this.data.getCustomer(this.customerId).pipe((0,v.b)(function(e){return t.seo.generateTags({title:e.name,description:e.bio,image:e.image})}))}}]),e}(),k.\u0275fac=function(t){return new(t||k)(a.Y36(s.gz),a.Y36(m.ST),a.Y36(u),a.Y36(d))},k.\u0275cmp=a.Xpm({type:k,selectors:[["app-detail-page"]],decls:14,vars:4,consts:[["href","https://cards-dev.twitter.com/validator","target","blank","mat-stroked-button","","color","accent"],["mat-raised-button","","routerLink","/customers"],[4,"ngIf"],["mat-card-image","",3,"src"]],template:function(t,e){1&t&&(a.TgZ(0,"h1"),a._uU(1,"Detail Page"),a.qZA(),a.TgZ(2,"mat-card"),a.TgZ(3,"p"),a._uU(4,"This content is server rendered with Angular Universal, NestJS, and Google Cloud Run."),a.qZA(),a._uU(5," Paste URL: "),a.TgZ(6,"pre"),a._uU(7),a.qZA(),a.TgZ(8,"a",0),a._uU(9,"Twitter Card Validator"),a.qZA(),a.TgZ(10,"button",1),a._uU(11,"BACK"),a.qZA(),a.qZA(),a.YNc(12,T,10,3,"mat-card",2),a.ALo(13,"async")),2&t&&(a.xp6(7),a.hij("https://firestarter.fireship.io/customers/",e.customerId,""),a.xp6(5),a.Q6J("ngIf",a.lcZ(13,2,e.customer)))},directives:[Z.a8,b.zs,b.lW,s.rH,o.O5,Z.dk,Z.n5,Z.$j,Z.G2,Z.dn],pipes:[o.Ov],styles:["[_nghost-%COMP%]{text-align:center;padding:24px}mat-card[_ngcontent-%COMP%]{max-width:450px;background-color:#212121;margin:0 auto 10px}"]}),k)}],_=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(C)],s.Bz]}),e}(),q=r(8677),w=((A=function e(){t(this,e)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=a.oAB({type:A}),A.\u0275inj=a.cJS({imports:[[o.ez,q.m,_]]}),A)}}])}();