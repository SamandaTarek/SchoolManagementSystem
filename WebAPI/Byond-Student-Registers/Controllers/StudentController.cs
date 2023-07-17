using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Byond_Student_Registers.Models;

namespace Byond_Student_Registers.Controllers
{
    public class StudentController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                   select StudentID, StudentFirstName, StudentLastName, StudentPhoto, StudentNote from 
                   dbo.Student
                   ";
            DataTable table = new DataTable();
            using(var con=new SqlConnection(ConfigurationManager.ConnectionStrings["StudentDB"].ConnectionString))
                using(var cmd = new SqlCommand(query,con) )
            using(var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Student std)
        {
            try
            {
                string query = @"
                    insert into dbo.Student values
                    (
                    '" + std.StudentFirstName + @"'
                    ,'" + std.StudentLastName + @"'
                    ,'" + std.StudentPhoto + @"'
                    ,'" + std.StudentNote + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["StudentDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Add!!";
            }
        }
        public string Put(Student std)
        {
            try
            {
                string query = @"
                    update dbo.Student set 
                    StudentFirstName='" + std.StudentFirstName + @"'
                    ,StudentLastName='" + std.StudentLastName + @"'
                    ,StudentPhoto='" + std.StudentPhoto + @"'
                    ,StudentNote='" + std.StudentNote + @"'
                    where StudentID=" + std.StudentID + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["StudentDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Update!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Student 
                    where StudentID=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["StudentDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Delete!!";
            }
        }

        [Route("api/Student/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                return "anonymous.png";
            }
        }
      

    }
}
