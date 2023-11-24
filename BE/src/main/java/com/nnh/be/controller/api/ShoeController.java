package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.DeleteShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.service.ShoeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/shoe/")
@CrossOrigin
public class ShoeController {
    private final ShoeService shoeService;

    @GetMapping("/self")
    public ShoeSelfSdo self(@RequestParam("id") Long id) {
        return shoeService.self(SelfShoeSdi.of(id));
    }

    @GetMapping("/get-all")
    public List<ShoeSelfSdo> findAll() {
        return shoeService.findAll();
    }

    @GetMapping("/search")
    public List<ShoeSelfSdo> search(@RequestParam(value = "search", required = false) String search,
                                    @RequestParam(value = "size", required = false) String size,
                                    @RequestParam(value = "category", required = false) String category,
                                    @RequestParam(value = "from", required = false) Integer from,
                                    @RequestParam(value = "to", required = false) Integer to
                                    ) {
//        return shoeService.search(search, size, category, from, to);
        return shoeService.findAll();
    }

    @GetMapping("/get-by-category/{category}")
    public List<ShoeSelfSdo> findByCategory(@PathVariable(value = "category", required = false) String category) {
        return shoeService.findByCategory(category);
    }

    @PostMapping("/create")
    public MessageSdo create(@RequestBody CreateShoeSdi req) {
        return shoeService.create(req);
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateShoeSdi req) {
        return shoeService.update(req);
    }

    @DeleteMapping("/delete")
    public MessageSdo delete(@RequestBody DeleteShoeSdi req) {
        return shoeService.delete(req);
    }
}
