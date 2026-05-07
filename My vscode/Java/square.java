public class square {
    int w;
    int l;

    public square(int w,int l){
        this.w=w;
        this.l=l;
    }
    public int S() {
        return w*l;
    }
    public int L() {
        return 2*(w+l);
    }
    public static void main(String[] argc){
        square r=new square(5,3);

        System.out.println("면적: " + r.S());
        System.out.println("둘레: "+ r.L());

    }
}
