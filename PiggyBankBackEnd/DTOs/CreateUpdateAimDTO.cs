﻿using PiggyBankBackEnd.Entities;

namespace PiggyBankBackEnd.DTOs
{
    public class CreateUpdateAimDTO
    {
        //public int Id { get; set; }
        public string Title { get; set; }
        public double Price { get; set; }
        public DateTime Date { get; set; }
        public string PicturePath { get; set; }
        public int WayOfSaving { get; set; }
        public UserEntity? User { get; set; }
        public int UserId { get; set; }

        
    }
}
