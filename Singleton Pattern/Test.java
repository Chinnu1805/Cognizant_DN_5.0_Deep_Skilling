package com.singleton;

public class Test {
	public static void main(String[] args)
	{
   Logger l1=Logger.getInstance();
   Logger l2=Logger.getInstance();
   
   if(l1==l2)
   {
	   System.out.println("Only one Instance is created");
   }
   else
   {
	   System.out.println("More than one Instance are created");
   }
}
}
