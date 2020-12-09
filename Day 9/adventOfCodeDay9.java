import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class adventOfCodeDay9 {

    public static void main(String args[]){

        System.out.println("Ping link");

        part1(); //Solution is 69316178
        part2(); //Solution is 69316178


    }

    public static void part1(){

        ArrayList<Long> codeLines = fileReading();
        ArrayList<Long> last25lines = new ArrayList<>();

        if (codeLines.size() <= 25)
            return;

        //Pre cache
        for (int y = 0; y < 25; y++){
            last25lines.add(codeLines.get(y));
        }


        //Main loop
        for (int x = 25; x < codeLines.size(); x++){

            if(!part1ValidCheck(codeLines.get(x),last25lines)){
                System.out.println(codeLines.get(x));
                break;
            }

            last25lines.remove(0);
            last25lines.add(codeLines.get(x));

        }

    }

    public static void part2(){

        ArrayList<Long> codeLines = fileReading();
        //Main loop
        for (int x = 0; x < codeLines.size(); x++){

            Long minNum = Long.MAX_VALUE;
            Long maxNum = Long.MIN_VALUE;

            Long sum = Long.valueOf("0");

            for(int y = x; y > -1; y--){

                minNum = Math.min(minNum, codeLines.get(y));
                maxNum = Math.max(maxNum, codeLines.get(y));

                sum += codeLines.get(y);

                if(sum == 69316178){
                    System.out.println(minNum + maxNum);
                    return;
                }
            }
        }

    }

    protected static boolean part1ValidCheck(Long value, ArrayList<Long> lines){

        for (int x = 0; x < lines.size(); x++){
            for (int y = 0; y < lines.size(); y++){

                if(x == y)
                    continue;

                if(lines.get(x) + lines.get(y) == value)
                    return true;

            }
        }
        return false;
    }


    protected static ArrayList<Long> fileReading(){

        ArrayList<Long> textLines = new ArrayList();

        try {
            File myObj = new File(".\\inputDay9.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                textLines.add(Long.parseLong(myReader.nextLine()));
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }


        return textLines;

    }

}
