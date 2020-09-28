document.write("Contributors to the Uc-Design Github Repository")
var repository_contributors = ["simonhq", "naomipham", "ZNB77", "Spoofadoo", "Blacklocks", "manish-ghimire", "bexi-91", "Sethie2001", "RealDestro", "LeaRozenn", "IsaacRik", "sd-1", "ClaireMcA", "thesuperolly", "shane-ducksbury-uc", "Rowena51", "NextQueenLiz", "Keir73", "Ian-1981", "quanbanh", "SushipingMcMeow", "RyanAltinger"];

document.write("<br><br>Contributor count: ");
document.write(repository_contributors.length);

document.write("<br><br>Contributors:<br>");

for (let i=0; i<repository_contributors.length; i++){
    document.write(repository_contributors[i] + "<br/>");
}