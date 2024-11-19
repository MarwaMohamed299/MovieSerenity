using Serenity.Navigation;
using MyPages = MovieSerenity.MovieDb.Pages;
using MoviesPage = MovieSerenity.MovieDB.Pages;
using CastPage = MovieSerenity.MovieDB.Pages;

[assembly: NavigationMenu(6000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(6100, "Movie Database/Movies",
    typeof(MoviesPage.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(6300, "Movie Database/Person",
    typeof(MyPages.PersonPage), icon: "fa-users")]
[assembly: NavigationLink(6400, "Movie Database/Cast", typeof(CastPage.MovieCastPage), icon: null)]
