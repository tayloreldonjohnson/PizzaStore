using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaStore.Data.Models
{
    public partial class Customer
    {
        public Customer()
        {

            Order = new HashSet<Order>();
        }

        public int CustomerId{ get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }


        public ICollection<Order> Order { get; set; }
    }
}
