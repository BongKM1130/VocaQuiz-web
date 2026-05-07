public class ddd {
    int x,y;
    public ddd(int x,int y) {
        this.x=x;
        this.y=y;
    }

    public void draw() {
        System.out.println("그리기");
    }
    public void move(int dx,int dy){
        x+=dx;
        y+=dy;
        System.out.println(dx + "만큼 x이동" + dy + "만큼 y이동");
    }
}

public class 직사 extends ddd {
    
}
