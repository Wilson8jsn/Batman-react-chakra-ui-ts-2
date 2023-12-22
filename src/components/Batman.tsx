import { Card, Carousel, Button, Typography } from "antd";
const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};


export default function BatmanCard() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 300 }}>
        <Meta
          style={{ textAlign: "start", display: "flex", alignItems: "start" }}
          avatar={
            <img
              style={{ objectFit: "cover", width: "40px", borderRadius: "50%" }}
              src="https://res.cloudinary.com/dcba9lt2s/image/upload/v1703178508/ekn5yfskqmxfdhd6hywu.png"
              alt=""
            />
          }
          title={
            <Typography.Title style={{ margin: 0 }}>Batman</Typography.Title>
          }
          description={
            <Typography.Title
              type="secondary"
              style={{ fontSize: 16, margin: 0 }}
            >
              Bruce Wayne
            </Typography.Title>
          }
        />
        <Carousel afterChange={onChange} style={{ margin: "20px 0" }}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button style={{ outline: "1px solid black" }}>Descartar</Button>
          <Button type="primary">User</Button>
        </div>
      </Card>
    </div>
  );
}
