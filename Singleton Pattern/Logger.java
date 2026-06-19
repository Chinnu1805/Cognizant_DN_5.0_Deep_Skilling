package com.singleton;

public class Logger {
   
	private static Logger logger=new Logger();
	
	private Logger()
	{
		System.out.println("Logger constructor created");
	}

	public static Logger getInstance()
	{
		return logger;
	}
}
