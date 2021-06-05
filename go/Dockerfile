FROM golang:1.16
WORKDIR /src
COPY . .
RUN go mod tidy && \
    go mod vendor && \
    go build -o /out/go-kafka
CMD [ "/out/go-kafka" ]