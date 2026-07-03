import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAATest{
	private StringOperations obj;

    @Before
    public void setUp() {
        obj = new StringOperations();
        System.out.println("Setup Executed");
    }

    @After
    public void tearDown() {
        obj = null;
        System.out.println("Teardown Executed");
    }

    @Test
    public void testLength() {

        String str = "Hello";

        int result = obj.getLength(str);

        assertEquals(5, result);
    }

    @Test
    public void testUpperCase() {

        String str = "hello";

        String result = obj.convertToUpper(str);

        assertEquals("HELLO", result);
    }
}