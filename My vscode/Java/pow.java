public class pow {
    public static void main(String[] argc) {
        System.out.println(bpow(7));
    }
    public static int bpow(int n){
        if (n==0) return 1;
        return 2 * bpow(n-1);
    }
}
