using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaStore.Data.Models
{
  public partial class Pizza
    {

        public Pizza()
        {
            
                       Order = new HashSet<Order>();
        }


        public int PizzaId{ get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public ICollection<Order> Order { get; set; }
    }
}
