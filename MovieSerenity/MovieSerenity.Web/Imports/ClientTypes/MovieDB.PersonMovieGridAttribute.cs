using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieSerenity.MovieDB;

public partial class PersonMovieGridAttribute : CustomEditorAttribute
{
    public const string Key = "MovieSerenity.MovieDB.PersonMovieGrid";

    public PersonMovieGridAttribute()
        : base(Key)
    {
    }
}