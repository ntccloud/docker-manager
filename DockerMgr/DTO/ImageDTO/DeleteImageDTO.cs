using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace DockerMgr.DTO.ImageDTO
{
    public class DeleteImageDTO
    {
        [Required] 
        [JsonProperty("ip")]
        public string Ip { get; set; }
        
        [Required] 
        [JsonProperty("id")]
        public string Id { get; set; }
    }
}