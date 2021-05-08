package main

import (
	"backend/handler"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://127.0.0.1:3000",
		AllowMethods: "GET,POST",
		AllowHeaders: "Authorization",
	}))

	app.Get("/public", handler.Public)
	app.Get("/private", handler.Private)

	if err := app.Listen(":5000"); err != nil {
		log.Println(err)
	}
}
