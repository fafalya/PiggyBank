using Microsoft.EntityFrameworkCore;
using PiggyBankBackEnd.Context;

var nameCors = "PiggyBank3000";


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: nameCors,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});
builder.Services.AddDbContext<ApplicationDbContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
    Console.WriteLine("test");
});
builder.Services.AddControllers();
builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Config DB

var app = builder.Build();
var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(nameCors);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
