using System.ComponentModel.DataAnnotations;
using System;
namespace AspNetCoreSpa.Core.Entities
{
    public class VoteEvent
    {
        [Key]
        public int Id { get; set; }
        
        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public VoteTypeEnums Type { get; set; }
        
    }
}