/**
 * 
 */
package com.iloyal.lppl;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 91989
 *
 */
@RestController
public class IndexController {

	@RequestMapping("/lppl")
    public String index() {
        return "index";
    }
}
