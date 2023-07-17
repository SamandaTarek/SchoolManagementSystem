using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Byond_Student_Registers.Models
{
    public class Student
    {
        public int StudentID { get; set; }
        public string StudentFirstName { get;set; }
        public string StudentLastName { get; set; }
        public string StudentPhoto { get; set; }
        public string StudentNote { get; set; } 

    }
}