import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class adventOfCodeDay8 {

    public static void main(String args[]){

        //System.out.println("Ping link");

        ArrayList<String> instructions = fileReading();
        part1(instructions);
        part2(instructions);

    }

    protected static String lineFlipper(String line){

        if(line.split(" ")[0].equals("jmp")){
            return "nop " + line.split(" ")[1];
        }

        if(line.split(" ")[0].equals("nop")){
            return "jmp " + line.split(" ")[1];
        }

        return line;
    }


    protected static void part2(ArrayList<String> i){

        int index = 0;
        int accumulator = 0;

        ArrayList<Integer> visitedLines = new ArrayList();

        while(!(index < 0 || index > i.size())) {

            if (visitedLines.contains(index))
                break;

            visitedLines.add(index);


            String line = i.get(index);

            int linechange = 1;

            if (line.split(" ")[0].equals("jmp")) {
                linechange = Integer.parseInt(line.split(" ")[1]);
            }

            if (line.split(" ")[0].equals("acc")) {
                accumulator += Integer.parseInt(line.split(" ")[1]);
            }

            index += linechange;

        }


        Collections.reverse(visitedLines);

        for (Integer num : visitedLines){

            index = 0;
            accumulator = 0;
            int linesExecuted = 0;

            boolean fixed = true;
            boolean keepLoop = true;

            while(keepLoop){

                String line = i.get(index);

                if (index == num){
                    line = lineFlipper(line);
                }

                int linechange = 1;

                if(line.split(" ")[0].equals("jmp")){
                    linechange = Integer.parseInt(line.split(" ")[1]);
                }

                if(line.split(" ")[0].equals("acc")){
                    accumulator += Integer.parseInt(line.split(" ")[1]);
                }

                index += linechange;
                linesExecuted++;

                if(index < 0 || index >= i.size()){
                    keepLoop = false;
                }

                if (linesExecuted >= i.size()){
                    fixed = false;
                    keepLoop = false;
                }

            }

            if(fixed){
				System.out.print("Part2: ");
                System.out.println(accumulator);
                break;
            }
        }

    }

    protected static void part1(ArrayList<String> i){

        int index = 0;
        int accumulator = 0;

        ArrayList<Integer> visitedLines = new ArrayList();

        while(!(index < 0 && index > i.size())){

            if(visitedLines.contains(index))
                break;

            visitedLines.add(index);


            String line = i.get(index);

            int linechange = 1;

            if(line.split(" ")[0].equals("jmp")){
                linechange = Integer.parseInt(line.split(" ")[1]);
            }

            if(line.split(" ")[0].equals("acc")){
                accumulator += Integer.parseInt(line.split(" ")[1]);
            }

            index += linechange;

        }
		
        System.out.print("Part1: ");
        System.out.println(accumulator);

    }

    protected static ArrayList<String> fileReading(){

        ArrayList<String> instructions = new ArrayList();

        try {
            File myObj = new File(".\\Input\\inputDay8.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                instructions.add(myReader.nextLine());
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }


        return instructions;

    }

}
