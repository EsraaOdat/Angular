using System;
using System.Collections.Generic;

namespace Task1_Angular.Server.Models;

public partial class Usersubscription
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int SubscriptionId { get; set; }

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }

    public int SubServiceId { get; set; }

    public virtual User User { get; set; } = null!;
}
