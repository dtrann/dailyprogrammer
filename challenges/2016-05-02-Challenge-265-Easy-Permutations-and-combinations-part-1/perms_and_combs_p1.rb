=begin 
Ruby practice

COMMENTS WITH LINKS FOR FUTURE REFERENCE

'puts' used to print out solution to console

.permutation http://ruby-doc.org/core-2.2.0/Array.html#method-i-permutation
.combination http://ruby-doc.org/core-2.2.0/Array.html#method-i-combination

.to_a http://ruby-doc.org/core-2.2.0/Array.html#method-i-to_a
converts to array

.at(x) index at x, we used -1 because index 0

.join http://ruby-doc.org/core-2.2.0/Array.html#method-i-join
string together the elements of the array on " "

=end

puts [*0...6].permutation.to_a.at(240-1).join(" ")
puts [*0...7].permutation.to_a.at(3240-1).join(" ")

puts [*0...8].combination(3).to_a.at(24-1).join(" ")
puts [*0...9].combination(4).to_a.at(112-1).join(" ")
