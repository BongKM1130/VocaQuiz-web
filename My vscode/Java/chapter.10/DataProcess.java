import java.util.stream.*;
public class DataProcess {
    public static void main(String argc[]) {
        Stream<String> stream = Stream.of("ax","ab","c"," ");
        stream 
        .filter(s->s.trim().length()>0 ? true:false)
        .map(s -> s.toUpperCase())
        .sorted()
        .forEach(System.out::println);
}
}