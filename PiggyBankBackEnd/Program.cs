using Microsoft.EntityFrameworkCore;
using NLog.Web;
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
});
builder.Services.AddControllers();
builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); 

builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.SetMinimumLevel(LogLevel.Trace);
}).UseNLog();



var app = builder.Build();
var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();


if (app.Environment.IsDevelopment())
{
    
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(nameCors);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


//Create logger for writing log files
var logger = NLogBuilder.ConfigureNLog("NLog.config").GetCurrentClassLogger();
try
{
    logger.Debug("Program initialisation");
    app.Run();

}
catch (Exception ex)
{
    logger.Error(ex, "Something goes wrong! Closing the program");
    throw;
}
finally
{
    NLog.LogManager.Shutdown();
}





