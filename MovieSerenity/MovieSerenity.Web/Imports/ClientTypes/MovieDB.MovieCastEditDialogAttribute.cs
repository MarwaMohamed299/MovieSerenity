using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace MovieSerenity.MovieDB;

public partial class MovieCastEditDialogAttribute : CustomEditorAttribute
{
    public const string Key = "MovieSerenity.MovieDB.MovieCastEditor";

    public MovieCastEditDialogAttribute()
        : base(Key)
    {
    }
}