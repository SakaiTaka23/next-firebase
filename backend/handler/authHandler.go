package handler

import "github.com/gofiber/fiber/v2"

func Public(c *fiber.Ctx) error {
	return c.SendString("hello public")
}

func Private(c *fiber.Ctx) error {
	return c.SendString("hello private")
}
