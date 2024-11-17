using Serenity.Navigation;
using MyPages = MovieSerenity.MovieDB.Pages;

[assembly: NavigationLink(6000, "MovieDB/Movie",
    typeof(MyPages.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(6100, "Movie Database/Movies",
    typeof(MyPages.MoviePage), icon: "fa-video-camera")]