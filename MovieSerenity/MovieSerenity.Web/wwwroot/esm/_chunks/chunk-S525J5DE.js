import{c as r,f as s,j as i}from"./chunk-7V7WNOD5.js";var l=s(i(),1);var m=class m extends l.ColumnsBase{};r(m,"GenreColumns"),m.columnsKey="Adminstration.Genre",m.Fields=(0,l.fieldsProxy)();var R=m;var a=s(i(),1);var e=class e{static getLookup(){return(0,a.getLookup)("MovieDB.Genre")}static async getLookupAsync(){return(0,a.getLookupAsync)("MovieDB.Genre")}};r(e,"GenreRow"),e.idProperty="GenreId",e.nameProperty="Name",e.localTextPrefix="Adminstration.Genre",e.lookupKey="MovieDB.Genre",e.deletePermission="Administration:General",e.insertPermission="Administration:General",e.readPermission="Administration:General",e.updatePermission="Administration:General",e.Fields=(0,a.fieldsProxy)();var v=e;var y=s(i(),1),f;(t=>(t.baseUrl="Adminstraion/Genre",t.Methods={Create:"Adminstraion/Genre/Create",Update:"Adminstraion/Genre/Update",Delete:"Adminstraion/Genre/Delete",Retrieve:"Adminstraion/Genre/Retrieve",List:"Adminstraion/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(o=>{t[o]=function(A,C,G){return(0,y.serviceRequest)(t.baseUrl+"/"+o,A,C,G)}})))(f||(f={}));var p=s(i(),1);var n=class n extends p.PrefixedContext{constructor(u){if(super(u),!n.init){n.init=!0;var t=p.StringEditor;(0,p.initFormType)(n,["Name",t])}}};r(n,"GenreForm"),n.formKey="Adminstration.Genre";var x=n;var S=s(i(),1),D=(o=>(o[o.Film=1]="Film",o[o.TvSeries=2]="TvSeries",o[o.MiniSeries=3]="MiniSeries",o))(D||{});S.Decorators.registerEnumType(D,"MovieSerenity.Modules.MovieDB.Movie.MovieKind","MovieDB.MovieKind");var L=s(i(),1),M=(t=>(t[t.Male=1]="Male",t[t.Female=2]="Female",t))(M||{});L.Decorators.registerEnumType(M,"MovieSerenity.Modules.MovieDB.Person.Gender");var d=s(i(),1);var c=class c extends d.ColumnsBase{};r(c,"PersonMovieColumns"),c.columnsKey="MovieSerenity.Modules.MovieDB.Person.PersonMovieColumns",c.Fields=(0,d.fieldsProxy)();var P=c;export{R as a,x as b,v as c,f as d,P as e};
//# sourceMappingURL=chunk-S525J5DE.js.map