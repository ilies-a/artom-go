package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	r.NoRoute(gin.WrapH(http.FileServer(gin.Dir("./server/dist", false))))

	r.Run(":3000")

}
