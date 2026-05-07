public class Dog {
    String name,color;
    int age;
    public Dog(String name,String color,int age) {
        this.name=name;
        this.color=color;
        this.age=age;
    }
    public void run() {
        System.out.println("강아지 달린다.");
    }
        public static void main(String[] argc){
        Dog d = new chiwawa("멍멍이","흰색",1);
        d.run();
    }
}

