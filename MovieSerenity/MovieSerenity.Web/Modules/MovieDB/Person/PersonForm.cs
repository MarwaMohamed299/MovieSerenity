using MovieSerenity.Modules.MovieDB.Person;
using Serenity.ComponentModel;
using System;

namespace MovieSerenity.MovieDb.Forms;

[FormScript("MovieDb.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonForm
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime BirthDate { get; set; }
    public string BirthPlace { get; set; }
    public Gender? Gender { get; set; }
    public int Height { get; set; }
}