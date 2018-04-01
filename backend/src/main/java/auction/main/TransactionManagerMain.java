package auction.main;

import auction.model.Entry;
import auction.service.EntryManager;
import auction.service.impl.EntryManagerImpl;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;
import java.util.List;

public class TransactionManagerMain {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext(
                "beans.xml");

        EntryManager entryManager = ctx.getBean("entryManager",
                EntryManagerImpl.class);

        Entry myentry = new Entry("kmalot01","kmauser2",100,"");
        Entry myentry1 = new Entry("kmalot01","kmauser2",120,"");

        List<Entry> myentries = new ArrayList<Entry>();
        myentries.add(myentry);
        myentries.add(myentry1);

        entryManager.createEntries(myentries);

        ctx.close();
    }


}
