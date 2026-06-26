
public class Service {
	private External ext;

    public Service(External ext) {
        this.ext = ext;
    }

    public String fetchData() {
        return ext.getData();
    }
} 
