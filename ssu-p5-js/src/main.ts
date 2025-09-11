import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 600);
    p.background(200);
  };

  p.draw = () => {
    p.fill('#ffffff');
    p.arc(50, 50, 80, 80, 0, p.PI);
  };
};

/*학습용 예제 코드



  두꺼운 외곽선 예제
  p.draw = () => {
    p.stroke(255, 0, 0);
    p.strokeWeight(1);
    p.ellipse(100, 100, 50, 50);
    p.fill(0, 255, 0);

    p.strokeWeight(10);
    p.ellipse(200, 200, 50, 50);
  };
};


  hex 색상 채우기
  p.draw = () => {
    p.fill('#ff0000');
    p.rect(50, 50, 100, 100);

    p.fill('#00ff00');
    p.rect(200, 50, 100, 100);

    p.fill('#0000ff');
    p.rect(50, 200, 100, 100);
  };
};

  컬러 과녁 그리기
  p.draw = () => {
    p.fill(255);
    p.ellipse(300, 300, 500, 500);

    p.fill(0);
    p.ellipse(300, 300, 400, 400);

    p.fill(0, 0, 255);
    p.ellipse(300, 300, 300, 300);
  
    p.fill(255, 0, 0);
    p.ellipse(300, 300, 200, 200);

    p.fill(255, 255, 0);
    p.ellipse(300, 300, 100, 100);
  };
};

  타원 여러개 그리기
  p.draw = () => {
    p.fill(0);
    p.ellipse(50, 50, 50, 50);

    p.fill(128);
    p.ellipse(100, 50, 50, 50);
    p.ellipse(100, 100, 50, 50);

    p.fill(255);
    p.ellipse(150, 50, 50, 50);
    p.ellipse(150, 100, 50, 50);
    p.ellipse(150, 150, 50, 50);
  };
};

  서로 다른 색의 두개의 원 그리기
  p.draw = () => {
    p.fill(51);
    p.ellipse(100, 100, 60, 60);

    p.fill(255, 255, 0);
    p.ellipse(100, 200, 100, 100);
  };
};


  원 그리고 내부 색 채우기
  p.draw = () => {
    p.fill(51);
    p.ellipse(150, 150, 200, 200);
  };
};

  원 여러개 그리기
  p.draw = () => {
    p.background(220);

    p.ellipse(300, 300, 500, 500);
    p.ellipse(300, 300, 400, 400);
    p.ellipse(300, 300, 300, 300);
    p.ellipse(300, 300, 200, 200);
    p.ellipse(300, 300, 100, 100);
  };
};
*/

new p5(sketch);
