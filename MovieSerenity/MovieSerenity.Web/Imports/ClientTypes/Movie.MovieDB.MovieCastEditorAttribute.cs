using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Movie.MovieDB;

public partial class MovieCastEditorAttribute : CustomEditorAttribute
{
    public const string Key = "Movie.MovieDB.MovieCastEditor";

    public MovieCastEditorAttribute()
        : base(Key)
    {
    }
}