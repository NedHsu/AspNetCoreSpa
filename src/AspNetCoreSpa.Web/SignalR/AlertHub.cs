using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace AspNetCoreSpa.Web.SignalR
{
    public class AlertHub : Hub
    {
        public Task Send(string message)
        {
            var groups = new List<string>();
            return Clients.Groups(groups).SendAsync("Send", message);
        }
    }
}