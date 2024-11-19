using MovieSerenity.Modules.MovieDB.Person;
using MovieTutorial.MovieDB;
using Serenity.ComponentModel;
using System;

namespace MovieSerenity.MovieDb.Forms;

[FormScript("MovieDb.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonForm
{

    [Tab("Person")]
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime BirthDate { get; set; }
    public string BirthPlace { get; set; }
    public Gender Gender { get; set; }
    public int Height { get; set; }

    [Tab("Movies"), IgnoreName, PersonMovieGrid, LabelWidth("0")]
    public string MoviesGrid { get; set; }

}