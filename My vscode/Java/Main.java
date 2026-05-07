import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("초를 입력하세요: ");
    int sec= sc.nextInt();
        int h = sec / 3600;
        int m = (sec % 3600) / 60;
        int s = sec % 60;
        System.out.println(h + ":" + m + ":" + s);
    }
}