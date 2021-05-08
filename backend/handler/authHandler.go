package handler

import "github.com/gofiber/fiber/v2"

func Public(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "hello public",
	})
}

func Private(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "hello private",
	})
}
