import{c as F}from"./chunk-KOPGFFRO.js";import{a as U}from"./chunk-QJDM5BK6.js";import{b as N}from"./chunk-ADC6SXVN.js";import{c as t,e as de,f as n,g as y,h as x,i as M,j as p}from"./chunk-7V7WNOD5.js";var T=de((fe,Y)=>{Y.exports=Serenity.Extensions});var pe=n(p(),1),le=n(T(),1);var E=n(p(),1);var C=class C extends E.ColumnsBase{};t(C,"MovieCastColumns"),C.columnsKey="MovieDB.MovieCast",C.Fields=(0,E.fieldsProxy)();var I=C;var v=n(p(),1);var u=class u extends v.PrefixedContext{constructor(i){if(super(i),!u.init){u.init=!0;var e=v.LookupEditor,o=v.StringEditor;(0,v.initFormType)(u,["PersonId",e,"Character",o])}}};t(u,"MovieCastForm"),u.formKey="MovieDB.MovieCast";var q=u;var W=n(p(),1);var l=class l{};t(l,"MovieCastRow"),l.idProperty="MovieCastId",l.nameProperty="Character",l.localTextPrefix="MovieDB.MovieCast",l.deletePermission="Adminstration:General",l.insertPermission="Adminstration:General",l.readPermission="Adminstration:General",l.updatePermission="Adminstration:General",l.Fields=(0,W.fieldsProxy)();var R=l;var H=n(p(),1),z;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(a,r,c){return(0,H.serviceRequest)(e.baseUrl+"/"+o,a,r,c)}})))(z||(z={}));var k=n(p(),1);var Q=n(p(),1);var g,B,J,h;J=[Q.Decorators.registerFormatter("MovieTutorial.GenreListFormatter")];var D=class D{format(i){let e=i.value;if(!e||!e.length)return"";let o=g==null?void 0:g.itemById;return o?e.map(a=>{var r=o[a];return i.escape(r==null?a:r.Name)}).join(", "):(B!=null||(B=F.getLookupAsync().then(a=>{var r;g=a;try{(r=i.grid)==null||r.invalidate()}finally{g=null,B=null}}).catch(()=>B=null)),N("i",{class:"fa fa-spinner"}))}};h=y(null),D=M(h,0,"GenreListFormatter",J,D),t(D,"GenreListFormatter"),x(h,1,D);var A=D;var G=class G extends k.ColumnsBase{};t(G,"MovieColumns"),G.columnsKey="MovieDB.Movie",G.Fields=(0,k.fieldsProxy)();var V=G;var s=n(p(),1);var Z=n(p(),1),$=n(T(),1);var X,O,ue;X=[Z.Decorators.registerEditor("MovieSerenity.MovieDB.MovieCastEditor")];var P=class P extends(ue=$.GridEditorBase){getColumnsKey(){return I.columnsKey}getLocalTextPrefix(){return R.localTextPrefix}constructor(i){super(i)}getDialogType(){return b}getAddButtonCaption(){return"Add"}validateEntity(i,e){if(!super.validateEntity(i,e))return!1;var o=e!=null?e:i[this.getIdProperty()];return U.getLookupAsync().then(a=>{var c;var r=(c=this.view)==null?void 0:c.getItemById(o);r&&(r.PersonFullName=a.itemById[i.PersonId].FullName,this.view.updateItem(o,r))}),!0}};O=y(ue),P=M(O,0,"MovieCastEditor",X,P),t(P,"MovieCastEditor"),x(O,1,P);var w=P;var f=class f extends s.PrefixedContext{constructor(i){if(super(i),!f.init){f.init=!0;var e=s.StringEditor,o=s.TextAreaEditor,a=w,r=s.IntegerEditor,c=s.DateEditor,me=s.EnumEditor,ce=s.LookupEditor;(0,s.initFormType)(f,["Title",e,"Description",o,"CastList",a,"Storyline",o,"Year",r,"ReleaseDate",c,"Runtime",r,"Kind",me,"GenreList",ce])}}};t(f,"MovieForm"),f.formKey="MovieDB.Movie";var j=f;var ee=n(p(),1);var d=class d{};t(d,"MovieGenresRow"),d.idProperty="MovieGenreId",d.localTextPrefix="MovieDB.MovieGenres",d.deletePermission="Adminstration:General",d.insertPermission="Adminstration:General",d.readPermission="Adminstration:General",d.updatePermission="Adminstration:General",d.Fields=(0,ee.fieldsProxy)();var _=d;var oe=n(p(),1),te;(e=>(e.baseUrl="MovieDB/MovieGenres",e.Methods={Create:"MovieDB/MovieGenres/Create",Update:"MovieDB/MovieGenres/Update",Delete:"MovieDB/MovieGenres/Delete",Retrieve:"MovieDB/MovieGenres/Retrieve",List:"MovieDB/MovieGenres/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(a,r,c){return(0,oe.serviceRequest)(e.baseUrl+"/"+o,a,r,c)}})))(te||(te={}));var ie=n(p(),1);var m=class m{};t(m,"MovieRow"),m.idProperty="MovieId",m.nameProperty="Title",m.localTextPrefix="MovieDB.Movie",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,ie.fieldsProxy)();var re=m;var ne=n(p(),1),se;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{e[o]=function(a,r,c){return(0,ne.serviceRequest)(e.baseUrl+"/"+o,a,r,c)}})))(se||(se={}));var ae,K,Re;ae=[pe.Decorators.registerClass("MovieSerenity.MovieDB.MovieCastEditDialog")];var L=class L extends(Re=le.GridEditorDialog){constructor(){super(...arguments);this.form=new q(this.idPrefix)}getFormKey(){return q.formKey}getNameProperty(){return R.nameProperty}getLocalTextPrefix(){return R.localTextPrefix}};K=y(Re),L=M(K,0,"MovieCastEditDialog",ae,L),t(L,"MovieCastEditDialog"),x(K,1,L);var b=L;export{V as a,j as b,re as c,se as d,b as e};
//# sourceMappingURL=chunk-RACC3FA6.js.map
