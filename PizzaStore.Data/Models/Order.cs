using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaStore.Data.Models
{
  public partial  class Order
    {

        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public int PizzaId { get; set; }
        public int Quantity { get; set; }

        public Pizza Pizza { get; set; }
        public Customer Customer { get; set; }
    }
}
